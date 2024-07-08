import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import './css/style.css';
import axios from 'axios';
import userlogin from '../userlogin'; // Pastikan path ini benar

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const user = userlogin(); // Dapatkan user dari localStorage

    // Fungsi untuk mengambil pesan
    const fetchMessages = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URI}/getMessages`);
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    useEffect(() => {
        // Panggil fetchMessages pertama kali
        fetchMessages();

        // Setup interval untuk polling setiap 5 detik
        const intervalId = setInterval(fetchMessages, 5000);

        // Cleanup interval saat komponen di-unmount
        return () => clearInterval(intervalId);
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim() === "") return;

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URI}/addmessage`, {
                user: user.nama,  // Gunakan nama user dari userlogin
                text: newMessage
            });

            setNewMessage("");

            // Tambahkan pesan baru ke state messages tanpa menunggu polling berikutnya
            setMessages((prevMessages) => [...prevMessages, response.data.createMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <section id="contact" className="contact">
                <div className="container bootstrap snippets bootdey">
                    <div className="row">
                        {/* Bagian kiri: Chat log */}
                        <div className="col-md-4 bg-white">
                            <div className="row border-bottom padding-sm">
                                Form Diskusi 
                            </div>

                            {/* Daftar teman */}
                        </div>

                        {/* Bagian kanan: Area pesan obrolan */}
                        <div className="col-md-8 bg-white">
                            <div className="chat-message">
                                <ul className="chat">
                                    {messages.map((message, index) => (
                                        <li className="left clearfix" key={index}>
                                            <span className="chat-img pull-left">
                                                <img src="https://storage.googleapis.com/proyekmpti/gambar%20/user.png" alt="User Avatar" />
                                            </span>
                                            <div className="chat-body clearfix">
                                                <div className="header">
                                                    <strong className="primary-font">{message.user}</strong>
                                                    <small className="pull-right text-muted"><i className="fa fa-clock-o"></i> {new Date().toLocaleTimeString()}</small>
                                                </div>
                                                <p>{message.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="chat-box bg-white">
                                <div className="input-group">
                                    <input 
                                        className="form-control border no-shadow no-rounded" 
                                        placeholder="Type your message here" 
                                        value={newMessage} 
                                        onChange={(e) => setNewMessage(e.target.value)} 
                                    />
                                    <span className="input-group-btn">
                                        <button 
                                            className="btn btn-success no-rounded" 
                                            type="button" 
                                            onClick={handleSendMessage}
                                        >
                                            Send
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chat;
