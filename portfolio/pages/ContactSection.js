import React from "react";

const ContactList = ({ mejl, telefon, lokal }) => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">My Contact List</h3>
    <ul className="text-lg">
      <li>{mejl}</li>
      <li>{telefon}</li>
      <li>{lokal}</li>
    </ul>
  </div>
);

const ContactSection = () => {
  const contacts = [
    {
      mejl: "Elias.burhan@chasacademy.se",
      telefon: "076123456",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20">
      <div className="container mx-auto px-4 flex justify-center">
        {contacts.map((contact, index) => (
          <ContactList key={index} {...contact} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
