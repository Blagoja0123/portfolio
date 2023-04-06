import { useRef, useState } from 'react'

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

import emailjs from '@emailjs/browser'
import StarWrapper from '../hoc/StarWrapper';
import Sun from './canvas/Sun';
import { useContext } from 'react';
import {LanguageContext} from '../Context/LanguageContext'
//process.env.API_KEY
//process.env.SERVICE_ID
//process.env.TEMPLATE_ID

const Contact = () => {
    const {language, changeLanguage} = useContext(LanguageContext);
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
        ...form,
        [name]: value,
        });
    };

        const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
        .send(
            import.meta.env.VITE_APP_SERVICE_ID,
            import.meta.env.VITE_APP_TEMPLATE_ID,
            {
            from_name: form.name,
            to_name: "Blagoja",
            from_email: form.email,
            to_email: "blagoja01234@gmail.com",
            message: form.message,
            },
            import.meta.env.VITE_APP_API_KEY
        )
        .then(
            () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
                name: "",
                email: "",
                message: "",
            });
            },
            (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
            }
        );
    };

    return (
        <div
        className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>{language[9].git}</p>
                <h3 className={styles.sectionHeadText}>{language[9].title}</h3>

                <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='mt-12 flex flex-col gap-8'
                >
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>{language[9].name}</span>
                    <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder={language[9].wname}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>{language[9].email}</span>
                    <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder={language[9].wemail}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>{language[9].msg}</span>
                    <textarea
                    rows={7}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder={language[9].wmsg}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>

                <button
                    type='submit'
                    className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                >
                    {loading ? language[9].ibtn : language[9].btn}
                </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <Sun/>
            </motion.div>
        </div>
    )
}

export default StarWrapper(Contact, "contact");