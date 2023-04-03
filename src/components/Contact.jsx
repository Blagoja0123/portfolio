import { useRef, useState } from 'react'

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

import StarWrapper from '../hoc/StarWrapper';
import emailjs from "@emailjs/browser";

const Contact = () => {
  
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>{
        const{target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    }
    return (
        <div>E</div>
    )
}

export default Contact