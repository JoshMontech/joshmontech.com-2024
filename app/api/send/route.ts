import { EmailTemplate } from '@/components/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const summary = formData.get('summary') as string
    // return Response.json({ name, email, summary })

  try {
    const { data, error } = await resend.emails.send({
      from: `${email} <resend@joshmontech.com>`,
      to: ['joshmontech@gmail.com'],
      subject: `site visitor: ${name} - ${email}`,
      text: '',
      react: EmailTemplate({email, name, summary}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}