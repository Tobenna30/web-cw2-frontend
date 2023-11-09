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
      spaces: 3,
    },
    // Add more lesson objects...
  ];
  
  // Store lessons in localStorage
  localStorage.setItem('lessons', JSON.stringify(lessons));
  