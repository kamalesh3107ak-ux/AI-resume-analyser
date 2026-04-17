export interface PdfConversionResult {
  imageUrl: string;
  file: File | null;
  error?: string;
}

export async function convertPdfToImage(
  file: File,
): Promise<PdfConversionResult> {
  try {
    // 🔥 IMPORTANT: dynamic import INSIDE function
    const pdfjsLib = await import('pdfjs-dist');

    // 🔥 Worker fix
    const worker = await import('pdfjs-dist/build/pdf.worker.min.mjs?url');
    pdfjsLib.GlobalWorkerOptions.workerSrc = worker.default;

    const buffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
    const page = await pdf.getPage(1);

    const viewport = page.getViewport({ scale: 2 });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) throw new Error('Canvas error');

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx, viewport, }).promise;

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          resolve({
            imageUrl: '',
            file: null,
            error: 'Blob failed',
          });
          return;
        }

        const imageFile = new File([blob], 'resume.png', {
          type: 'image/png',
        });

        resolve({
          imageUrl: URL.createObjectURL(blob),
          file: imageFile,
        });
      });
    });
  } catch (err: any) {
    console.error('PDF ERROR:', err);

    return {
      imageUrl: '',
      file: null,
      error: err.message,
    };
  }
}
