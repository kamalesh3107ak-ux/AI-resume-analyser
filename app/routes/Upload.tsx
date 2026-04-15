import {  FormEvent, useState } from 'react';
import Navbar from '~/routes/components/Navbar';
const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [statusText, setStatusText] = useState('');
  /*const handleSubmit = (e:FormEvent <HTMLFormElement>) => {
  }*/const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-8"
            >
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input
                  type="text"
                  name="company-name"
                  placeholder="Company-name"
                  id="company-name"
                />
              </div>
              <div className="form-div">
                <label htmlFor="Job-title">Job Title</label>
                <input type="text" name="job Title" placeholder="job Title" id="job Title" />
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );

}
export default Upload;