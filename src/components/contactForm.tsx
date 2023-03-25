import "react-toastify/dist/ReactToastify.min.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [disabled, setDisabled] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>();

    const toastifySuccess = (): void => {
        toast("Form sent!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: "submit-feedback-success"
        });
    };

    const toastifyFail = (): void => {
        toast("Uh oh, something went wrong", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: "submit-feedback-fail"
        });
    };

    const onSubmit = async (data: FormData) => {
        // Send form email
        try {
            setDisabled(true);
            const templateParams: FormData = {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            };

            const res = await fetch("../helpers/sendmail", {
                method: "POST",
                body: JSON.stringify(templateParams)
            });

            if (res.status === 200) {
                reset();
                toastifySuccess();
            } else {
                toastifyFail();
            }

            setDisabled(false);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="ContactForm">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="contactForm">
                            <form
                                id="contact-form"
                                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                onSubmit={handleSubmit(onSubmit)}
                                method="POST"
                                noValidate={true}
                            >
                                {/* Row 1 of form */}
                                <div className="row formRow">
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Please enter your name"
                                                },
                                                maxLength: {
                                                    value: 30,
                                                    message:
                                                        "Please use 30 characters or less"
                                                }
                                            })}
                                            className="form-control formInput"
                                            placeholder="Name"
                                        ></input>
                                        {errors.name && (
                                            <span className="errorMessage">
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="col-6">
                                        <input
                                            type="email"
                                            {...register("email", {
                                                required: true,
                                                pattern:
                                                    /^[\w.!#$%&’*+/=?^`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/
                                            })}
                                            className="form-control formInput"
                                            placeholder="Email address"
                                        ></input>
                                        {errors.email && (
                                            <span className="errorMessage">
                                                Please enter a valid email
                                                address
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {/* Row 2 of form */}
                                <div className="row formRow">
                                    <div className="col">
                                        <input
                                            type="text"
                                            {...register("subject", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Please enter a subject"
                                                },
                                                maxLength: {
                                                    value: 75,
                                                    message:
                                                        "Subject cannot exceed 75 characters"
                                                }
                                            })}
                                            className="form-control formInput"
                                            placeholder="Subject"
                                        ></input>
                                        {errors.subject && (
                                            <span className="errorMessage">
                                                {errors.subject.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {/* Row 3 of form */}
                                <div className="row formRow">
                                    <div className="col">
                                        <textarea
                                            rows={3}
                                            {...register("message", {
                                                required: true
                                            })}
                                            className="form-control formInput"
                                            placeholder="Message"
                                        ></textarea>
                                        {errors.message && (
                                            <span className="errorMessage">
                                                Please enter a message
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <button
                                    className="primary-btn"
                                    disabled={disabled}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
