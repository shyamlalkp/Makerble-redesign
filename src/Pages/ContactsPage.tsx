import React, { useState } from "react";

const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState<string[]>([]);
  const [newContact, setNewContact] = useState("");
  const [error, setError] = useState("");

  const handleAddContact = () => {
    if (newContact.trim().length < 3) {
      setError("Contact name must be at least 3 characters.");
      return;
    }
    setContacts([...contacts, newContact]);
    setNewContact("");
    setError("");
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      <div className="mb-4">
        <input
          type="text"
          className="border rounded w-full p-2"
          placeholder="Enter contact name"
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleAddContact}
        >
          Add Contact
        </button>
      </div>
      <div>
        <h3 className="font-bold mb-2">Contact List</h3>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="border-b py-2">
              {contact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactsPage;
