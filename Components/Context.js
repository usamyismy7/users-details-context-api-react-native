import React, { createContext, useState } from 'react';

export const UserDataContext = createContext({
  users: [],
  addNewUser: () => { },
  removeUser: () => { }
});

export default function ContextProvider({ children }) {
  const [user, setUser] = useState([
		{
			id:'12101',
			displayName:'Usama',
			profileImage: require('../assets/images/a.png'),
			bio: 'Lives in Wah, does bachelors in computer science, is a hardworking student, has good grades in all the courses.',
			email: 'usama@gmail.com',
		},
		{
			id:'12102',
			displayName:'Haris',
			profileImage: require('../assets/images/a.png'),
			bio: 'Lives in Taxila, does bachelors in computer science, is a hardworking student, has average grades in all the courses.',
			email: 'haris@gmail.com',
		},
		{
			id:'12103',
			displayName:'Asma',
			profileImage: require('../assets/images/b.png'),
			bio: 'Lives in Islamabad, does bachelors in computer science, is a hardworking student, has excellent grades in all the courses.',
			email: 'sohail@gmail.com',
		},
		{
			id:'12104',
			displayName:'Usman',
			profileImage: require('../assets/images/a.png'),
			bio: 'Lives in Wah, does bachelors in computer science, is a hardworking student, has excellent grades in all the courses.',
			email: 'usman@gmail.com',
		},
		{
			id:'12105',
			displayName:'Hira',
			profileImage: require('../assets/images/b.png'),
			bio: 'Lives in Rawalpindi, does bachelors in computer science, is a hardworking student, has good grades in all the courses.',
			email: 'hamza@gmail.com',
		},
		{
			id:'12106',
			displayName:'Talha',
			profileImage: require('../assets/images/a.png'),
			bio: 'Lives in Chakwal, does bachelors in computer science, is a hardworking student, has bad grades in all the courses.',
			email: 'talha@gmail.com',
		},
		{
			id:'12107',
			displayName:'Fatima',
			profileImage: require('../assets/images/b.png'),
			bio: 'Lives in Peshawar, does bachelors in computer science, is a hardworking student, has great grades in all the courses.',
			email: 'fatima@gmail.com',
		},
		{
			id:'12108',
			displayName:'Shahzaib',
			profileImage: require('../assets/images/a.png'),
			bio: 'Lives in Attock, does bachelors in computer science, is a hardworking student, has great grades in all the courses.',
			email: 'shahzaib@gmail.com',
		},
		{
			id:'12109',
			displayName:'Irfan',
			profileImage: require('../assets/images/a.png'),
			bio: 'Lives in Karachi, does bachelors in computer science, is a hardworking student, has good grades in all the courses.',
			email: 'irfan@gmail.com',
		},
		{
			id:'12110',
			displayName:'Iqra',
			profileImage: require('../assets/images/b.png'),
			bio: 'Lives in Hassan abdal, does bachelors in computer science, is a hardworking student, has bad grades in all the courses.',
			email: 'iqra@gmail.com',
		},
  ])
  function addNewUser(obj) {
    user.push(obj);
  }
  function removeUser(id) {
    user.splice(id, 1);
  }
  const values = {
    users: user,
    addNewUser: addNewUser,
    removeUser: removeUser,
  }
  return (
    <UserDataContext.Provider value={values}>
      {children}
    </UserDataContext.Provider>
  )
}