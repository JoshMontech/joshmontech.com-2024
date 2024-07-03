interface EmailTemplateProps {
    email: string
    name: string
    summary: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    email, name, summary
}) => (
  <div>
    <h3>visitor {name} had this to say:</h3>
    <p>{summary}</p>
    <p>they can be reached at {email}</p>
  </div>
);