const lessons = [
    {
      id: 1,
      subject: 'Math',
      location: 'Room A',
      price: 20,
      spaces: 5,
    },
    {
      id: 2,
      subject: 'Science',
      location: 'Lab B',
      price: 25,
      spaces: 5,
    },
    {
      id: 3,
      subject: 'History',
      location: 'Room C',
      price: 15,
      spaces: 5,
    },
    {
      id: 4,
      subject: 'Literature',
      location: 'Room D',
      price: 18,
      spaces: 5,
    },
    {
      id: 5,
      subject: 'Art',
      location: 'Studio A',
      price: 30,
      spaces: 5,
    },
    {
      id: 6,
      subject: 'Music',
      location: 'Studio B',
      price: 22,
      spaces: 5,
    },
    {
      id: 7,
      subject: 'Physical Education',
      location: 'Field',
      price: 17,
      spaces: 5,
    },
    {
      id: 8,
      subject: 'Computer Science',
      location: 'Lab C',
      price: 28,
      spaces: 5,
    },
    {
      id: 9,
      subject: 'Biology',
      location: 'Lab D',
      price: 26,
      spaces: 5,
    },
  ];
  
  // Store lessons in localStorage
  localStorage.setItem('lessons', JSON.stringify(lessons));
  