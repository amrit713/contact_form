import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/slices/contactSlice";

const ContactForm = () => {
    const dispatch = useDispatch();

    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
        dispatch(addContact(contact));

        setContact({ firstName: "", lastName: "", email: "", message: "" });
    };
    return (
        <div className="rounded-lg border border-[#5b5b5b]  bg-[#1e1e1e]   shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
                <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    Contact Us
                </h1>
                <p className=" text-sm text-gray-400">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                </p>
            </div>
            <div className="p-6 pt-0">
                <form className="space-y-4" onSubmit={onSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm ">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="input "
                                id="first-name"
                                placeholder="Enter your first name"
                                required
                                value={contact.firstName}
                                onChange={(e) =>
                                    setContact({
                                        ...contact,
                                        firstName: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm ">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="input "
                                id="last-name"
                                placeholder="Enter your last name"
                                required
                                value={contact.lastName}
                                onChange={(e) =>
                                    setContact({
                                        ...contact,
                                        lastName: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm ">
                            Email
                        </label>
                        <input
                            type="email"
                            className="input "
                            id="email"
                            placeholder="Enter your email"
                            required
                            value={contact.email}
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm ">
                            Message
                        </label>
                        <textarea
                            type="text"
                            className="input min-h-[100px]"
                            id="=message"
                            placeholder="Enter your message"
                            required
                            value={contact.message}
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    message: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="flex items-center">
                        <button className="btn w-full" type="submit">
                            {" "}
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
