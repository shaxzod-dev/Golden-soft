import { useState } from "react";
import { title } from "@/data";
import { Button } from "antd";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const token: string = "6845161331:AAG2wcVs_8oap9y4lTPgh86B9DJRn9j4MIA";
  const chatId: number = 5015798580;
  async function OnSubmit(e: any) {
    setLoading(!loading);
    e.preventDefault();
    const message = `Email: ${email}`;
    const chatMessage = `chat_id=${chatId}`;
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?text=${message}&${chatMessage}`
    );
    if (res.status == 200) {
      alert("You have succesfuly signed up");
      setEmail("");
      setLoading(false);
    }
  }
  return (
    <section className="pt-16 pb-[56px] bg-[rgb(242,248,255)]">
      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className={`${title} text-center`}>Мы Вам перезвоним</h1>
          <p className="text-center max-w-[518px] w-full text-base font-normal leading-[26px] mt-6 text-text_color">
            Если у вас возникли какие-то вопросы или проблемы, заполните форму и
            мы Вам перезвоним.
          </p>
          <form
            onSubmit={(e: any): any => OnSubmit(e)}
            className="gap-6 mt-6 flex items-center justify-center w-full"
          >
            <input
              className="bg-[rgba(22,28,36,0.04)] text-text_color py-3 w-[240px] pl-4 focus:outline-none"
              type="email"
              name="email"
              value={email}
              placeholder="Ваш Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="disabled:opacity-[0.5] flex items-center bg-[rgb(66,149,228)] py-3 text-white px-[70px]"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <Button type="primary" size="small" loading></Button>
              ) : (
                <p>Отправить</p>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
