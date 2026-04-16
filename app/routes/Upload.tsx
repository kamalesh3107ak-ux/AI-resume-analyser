import { type FormEvent, useState } from 'react';
import Navbar from '~/routes/components/Navbar';
import FileUploader from "~/routes/components/FileUploader";
const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [file, setFile] = useState< File | null>(null);

  const handleFileSelect = (file: File | null ) => {
    setFile(file);

  }
  const handleSubmit = (e:FormEvent <HTMLFormElement>) => {
      e.preventDefault();
  }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1> Smart feedback for your dream job </h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src="/images/resume-scan.gif" className="w-full" />
            </>
          ) : (
            <h2>Drop your resume for an ATS score and improvement tips</h2>
          )}
          {!isProcessing && (
            <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input type="text" name="company-name" placeholder="Company-name" id="company-name"/>
              </div>
              <div className="form-div">
                <label htmlFor="Job-title">Job Title</label>
                <input type="text" name="job Title" placeholder="job Title" id="job-Title" />
              </div>
                <div className="form-div">
                    <label htmlFor="Job-description">Job Description</label>
                    <textarea rows={5} name="job-description" placeholder="job Description" id="job-description" />
                </div>
                <div className="form-div">
                    <label htmlFor="uploder">Upload Resume</label>
                    <FileUploader onFileSelect={handleFileSelect}/>
                </div>
                <button className="primary-button" type="submit">
                    Analyse Resume
                </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );

}
export default Upload;