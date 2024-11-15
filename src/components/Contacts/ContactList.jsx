import { useState } from "react";
import ContactRow from "../ContactRow/ContactRow";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const onCreateHandler = (contact) => {
    const nextId = contacts.length + 1;
    setContacts([...contacts, { ...contact, id: nextId }]);
  };

  const onUpdateHandler = (contact) => {
    setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
  };

  return (
    <div className="contacts">
      {contacts.map((contact) => (
        <ContactRow
          key={contact.id}
          contact={contact}
          onSave={onUpdateHandler}
        />
      ))}
      <ContactRow onSave={onCreateHandler} shouldClearOnSave={true}/>
    </div>
  );
};

export default ContactList;
