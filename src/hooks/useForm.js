import { useState } from "react";
import swal from "sweetalert";


const useForm = (initialData, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const err = onValidate(form)
        setErrors(err)

        if (Object.keys(err).length === 0) {
            setLoading(true)
            fetch('https://backend-production-be0f.up.railway.app/api/insertContactos', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(form)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    data.success === "true" && setForm(initialData)
                    setLoading(false)
                    setForm({ name: '', email: '', phone: '', message: '' })
                    swal({
                        title: "Tu mensaje se envió con éxito",
                        text: "En breve nos pondremos en contacto",
                        icon: "success",
                        button: "Aceptar"
                    });
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                });
        }
    }


    return { form, errors, loading, handleChange, handleSubmit }
}

export default useForm;