## VirtuHire AI: AI Based Hiring

### Introduction
VirtuHire AI is a cutting-edge application designed to revolutionize the recruitment process through the power of artificial intelligence. This innovative platform leverages state-of-the-art algorithms to streamline hiring procedures, enabling organizations to bid farewell to traditional methods. VirtuHire AI empowers recruiters to effortlessly identify ideal candidates, as its advanced algorithms meticulously evaluate resumes, considering projects, skills, work experience, cultural fit, and aptitude

### WorkFlow
- The workflow begins with recruiters accessing our web application, where they initiate the onboarding process by signing up. User details are seamlessly transmitted to a MongoDB database via a POST request.
- After successful registration, recruiters gain access to the Job portal page for creating listings. Each job, assigned a unique ID, dynamically stores details in MongoDB through a POST request, generating an automated link.
- The link is dynamically generated based on the job ID and includes a copy button functionality.

- The personalized gateway link is then dispatched to candidates via email.As candidates click on the provided link, they are prompted to input their details, which are promptly stored in the MongoDB database. The interface then displays a curated list of jobs posted by recruiters. When a candidate selects a specific job, the system prompts them to upload their resume, which is locally stored.

- The next crucial step involves leveraging JavaScript functions, specifically fs.readFileSync, to meticulously analyze the textual content of the uploaded resumes.
- It sanitizes the text to prevent SQL injection, logs the sanitized text, and then asynchronously connects to MindsDB while running a query based on the processed text. This forms a crucial step in the comprehensive evaluation of candidate qualifications, offering valuable insights for recruiters

- A complete overview has been written in this blog:- [VirtuHire AI](https://virtuihireai.hashnode.dev/virtuhire-ai-ai-based-hiring)
