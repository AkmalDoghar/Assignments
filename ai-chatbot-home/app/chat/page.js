'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { v4 as uuidv4 } from 'uuid';

export default function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [chatId, setChatId] = useState(null);
    const [allChats, setAllChats] = useState([]);

    // Load all chats from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('allChats');
        if (saved) {
            const parsed = JSON.parse(saved);
            setAllChats(parsed);

            // Optionally load last used chat
            if (parsed.length > 0) {
                setChatId(parsed[0].id);
                setMessages(parsed[0].messages);
            }
        }
    }, []);

    // Save all chats to localStorage
    useEffect(() => {
        if (allChats.length > 0) {
            localStorage.setItem('allChats', JSON.stringify(allChats));
        }
    }, [allChats]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const newMessage = { role: 'user', content: input };
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setInput('');
        setLoading(true);

        const res = await fetch('/api/chat', {
            method: 'POST',
            body: JSON.stringify({ messages: updatedMessages }),
        });

        const data = await res.json();
        const reply = data.choices?.[0]?.message;
        const finalMessages = [...updatedMessages, reply];

        setMessages(finalMessages);
        setLoading(false);

        if (chatId) {
            setAllChats(prev =>
                prev.map(c => {
                    if (c.id === chatId) {
                        // update title if it's still empty
                        const updatedTitle = c.title?.trim()
                            ? c.title
                            : input.trim().split(" ").slice(0, 4).join(" ");
                        return {
                            ...c,
                            title: updatedTitle,
                            messages: finalMessages
                        };
                    }
                    return c;
                })
            );
        } else {
            const newId = uuidv4();
            const title = input.trim().split(" ").slice(0, 4).join(" ");
            const newChat = { id: newId, title, messages: finalMessages };
            setAllChats(prev => [newChat, ...prev]);
            setChatId(newId);
        }


    };

    const handleDeleteChat = (idToDelete) => {
        // Confirm before delete (optional)
        if (!confirm("Are you sure you want to delete this chat?")) return;

        setAllChats(prev => prev.filter(chat => chat.id !== idToDelete));

        // If the deleted chat was open, close it
        if (chatId === idToDelete) {
            setChatId(null);
            setMessages([]);
        }
    };


    const loadChat = (id) => {
        const chat = allChats.find(c => c.id === id);
        if (chat) {
            setMessages(chat.messages);
            setChatId(chat.id);
        }
    };

    return (
        <>
            <Navbar />
            <div className="d-flex position-relative">

                {showHistory && (
                    <div className="history-box">
                        <button
                            onClick={() => setShowHistory(false)}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'transparent',
                                border: 'none',
                                fontSize: '1.25rem',
                                color: 'white',
                                cursor: 'pointer',
                            }}
                        >
                            ❌
                        </button>

                        <h5>🕘 Chat History</h5>
                        {allChats.map((chat) => (
                            <div
                                key={chat.id}
                                className={`history-msg small mb-2 d-flex justify-content-between align-items-center p-2  ${chat.id === chatId ? 'fw-bold' : ''}`}
                                style={{ cursor: 'pointer' }}
                            >
                                <span
                                    className="d-block flex-grow-1 me-2"
                                    onClick={() => loadChat(chat.id)}
                                >
                                    {chat.title ? (chat.role === "user" ? "👤 " : "🤖 ") : "👤 "}
                                    {chat.title}...
                                </span>

                                <button
                                    className="delete-btn "
                                    onClick={() => handleDeleteChat(chat.id)}
                                    title="Delete chat"
                                >
                                    🗑️
                                </button>
                                <button
                                    onClick={() => setShowHistory(false)}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'transparent',
                                        border: 'none',
                                        fontSize: '1.25rem',
                                        color: 'white',
                                        cursor: 'pointer',
                                    }}
                                >
                                    ❌
                                </button>

                            </div>
                        ))}
                    </div>
                )}


                <div className="container">
                    <div className="d-flex justify-content-between align-items-center chat-box">
                        <h2>💬 AI ChatBot</h2>
                        <div className="chat-btn d-flex justify-content-end flex-wrap gap-2 mb-3">
                            <button
                                onClick={() => {
                                    const newId = uuidv4();
                                    const newChat = {
                                        id: newId,
                                        title: '',
                                        messages: [],
                                    };
                                    setChatId(newId);
                                    setMessages([]);
                                    setAllChats(prev => [newChat, ...prev]);
                                }}
                                className="btn btn-outline-primary btn-sm"
                            >
                                New Chat
                            </button>

                            <button
                                onClick={() => setShowHistory(!showHistory)}
                                className="btn btn-outline-light btn-sm"
                            >
                                {showHistory ? 'Hide History' : 'Show History'}
                            </button>
                        </div>


                    </div>

                    <div
                        className="chat"
                        style={{
                            height: '270px',
                            overflowY: 'auto',
                            padding: '20px',
                            borderRadius: '15px',
                            border: '1px solid #333',
                        }}
                    >
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`d-flex mb-3 ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                            >
                                {msg.role !== 'user' && <span className="me-2 fs-4">🤖</span>}
                                <div
                                    className={`px-4 py-2 rounded-4 shadow-lg ${msg.role === 'user' ? 'user-bubble' : 'bot-bubble'
                                        }`}
                                    style={{
                                        maxWidth: '75%',
                                        whiteSpace: 'pre-wrap',
                                        wordBreak: 'break-word',
                                    }}
                                >
                                    <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
                                </div>
                                {msg.role === 'user' && <span className="ms-2 fs-4">🧑‍💻</span>}
                            </div>
                        ))}

                        {loading && <p className="text-muted">🤖 Bot is typing...</p>}
                    </div>


                    <div className="d-flex align-items-center glowing-input-box w-100">
                        <input
                            className="form-control chat-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                        />

                        <button
                            onClick={handleSend}
                            className="btn btn-send ms-2"
                        >
                            Send
                        </button>
                    </div>


                </div>
            </div>
        </>
    );
}
