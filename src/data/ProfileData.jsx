import { ImageCollection } from "../../assets";


export const courses = [
  { id: 1, name: "Introduction to Computer Science" },
  { id: 2, name: "Data Structures and Algorithms" },
  { id: 3, name: "Computer Networks" },
  { id: 4, name: "Operating Systems" },
  { id: 5, name: "Database Management Systems" },
  { id: 6, name: "Software Engineering" },
  { id: 7, name: "Web Development" },
  { id: 8, name: "Artificial Intelligence" },
  { id: 9, name: "Machine Learning" },
  { id: 10, name: "Computer Graphics" },
  { id: 11, name: "Cybersecurity" },
  { id: 12, name: "Computer Vision" },
];

export const faculties = [
  {
    name: "Engineering",
    departments: [
      {
        name: "Electrical Engineering",
        instructors: [
          { id: 1, name: "Mr. Smith", image: ImageCollection.banner2 },
          { id: 2, name: "Ms. Johnson", image: ImageCollection.banner2 },
          { id: 3, name: "Dr. Lee", image: ImageCollection.banner2 },
          { id: 4, name: "Prof. Brown", image: ImageCollection.banner2 }
        ],
        courses: [
          { id: 1, name: "Introduction to Circuits" },
          { id: 2, name: "Power Systems Engineering" },
          { id: 3, name: "Digital Signal Processing" },
          { id: 4, name: "Electromagnetic Theory" },
          { id: 5, name: "Renewable Energy Systems" }
        ],
        timetable: [
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Circuits" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Power Systems Engineering" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Digital Signal Processing" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Electromagnetic Theory" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Renewable Energy Systems" },
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Circuits" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Power Systems Engineering" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Digital Signal Processing" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Electromagnetic Theory" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Renewable Energy Systems" },
        ]
      },
      {
        name: "Mechanical Engineering",
        instructors: [
          { id: 5, name: "Dr. Wilson", image: ImageCollection.banner2 },
          { id: 6, name: "Ms. Martinez", image: ImageCollection.banner2 },
          { id: 7, name: "Prof. Thompson", image: ImageCollection.banner2 },
          { id: 8, name: "Mr. Anderson", image: ImageCollection.banner2 }
        ],
        courses: [
          { id: 6, name: "Thermodynamics" },
          { id: 7, name: "Fluid Mechanics" },
          { id: 8, name: "Machine Design" },
          { id: 9, name: "Heat Transfer" },
          { id: 10, name: "Control Systems" }
        ],
        timetable: [
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Thermodynamics" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Fluid Mechanics" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Machine Design" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Heat Transfer" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Control Systems" },
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Thermodynamics" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Fluid Mechanics" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Machine Design" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Heat Transfer" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Control Systems" },
        ]
      }
    ]
  },
  {
    name: "Medicine",
    departments: [
      {
        name: "Cardiology",
        instructors: [
          { id: 9, name: "Dr. Garcia", image: ImageCollection.banner2 },
          { id: 10, name: "Ms. White", image: ImageCollection.banner2 },
          { id: 11, name: "Prof. Perez", image: ImageCollection.banner2 },
          { id: 12, name: "Mr. Rodriguez", image: ImageCollection.banner2 }
        ],
        courses: [
          { id: 11, name: "Introduction to Cardiology" },
          { id: 12, name: "Cardiac Imaging" },
          { id: 13, name: "Cardiac Electrophysiology" },
          { id: 14, name: "Cardiovascular Pharmacology" },
          { id: 15, name: "Interventional Cardiology" }
        ],
        timetable: [
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Cardiology" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Cardiac Imaging" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Cardiac Electrophysiology" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Cardiovascular Pharmacology" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Interventional Cardiology" },
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Cardiology" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Cardiac Imaging" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Cardiac Electrophysiology" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Cardiovascular Pharmacology" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Interventional Cardiology" },
        ]
      },
      {
        name: "Neurology",
        instructors: [
          { id: 13, name: "Dr. Hernandez", image: ImageCollection.banner2 },
          { id: 14, name: "Ms. Lopez", image: ImageCollection.banner2 },
          { id: 15, name: "Prof. Sanchez", image: ImageCollection.banner2 },
          { id: 16, name: "Mr. Gonzalez", image: ImageCollection.banner2 }
        ],
        courses: [
          { id: 16, name: "Introduction to Neurology" },
          { id: 17, name: "Neuroanatomy" },
          { id: 18, name: "Neurophysiology" },
          { id: 19, name: "Neuropharmacology" },
          { id: 20, name: "Clinical Neurology" }
        ],
        timetable: [
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Neurology" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Neuroanatomy" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Neurophysiology" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Neuropharmacology" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Clinical Neurology" },
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Neurology" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Neuroanatomy" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Neurophysiology" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Neuropharmacology" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Clinical Neurology" },
        ]
      }
    ]
  },
  {
    name: "Computer Science",
    departments: [
      {
        name: "Software Engineering",
        instructors: [
          { id: 17, name: "Dr. Clark", image: ImageCollection.banner2 },
          { id: 18, name: "Ms. Adams", image: ImageCollection.banner2 },
          { id: 19, name: "Prof. Hall", image: ImageCollection.banner2 },
          { id: 20, name: "Mr. Baker", image: ImageCollection.banner2 }
        ],
        courses: [
          { id: 21, name: "Introduction to Software Engineering" },
          { id: 22, name: "Software Architecture" },
          { id: 23, name: "Software Testing" },
          { id: 24, name: "Web Development" },
          { id: 25, name: "Mobile App Development" }
        ],
        timetable: [
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Software Engineering" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Software Architecture" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Software Testing" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Web Development" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Mobile App Development" },
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Software Engineering" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Software Architecture" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Software Testing" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Web Development" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Mobile App Development" },
        ]
      },
      {
        name: "Data Science",
        instructors: [
          { id: 21, name: "Dr. Moore", image: ImageCollection.banner2 },
          { id: 22, name: "Ms. Taylor", image: ImageCollection.banner2 },
          { id: 23, name: "Prof. Allen", image: ImageCollection.banner2 },
          { id: 24, name: "Mr. Hill", image: ImageCollection.banner2 }
        ],
        courses: [
          { id: 26, name: "Introduction to Data Science" },
          { id: 27, name: "Data Analysis" },
          { id: 28, name: "Machine Learning" },
          { id: 29, name: "Deep Learning" },
          { id: 30, name: "Big Data Technologies" }
        ],
        timetable: [
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Data Science" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Data Analysis" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Machine Learning" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Deep Learning" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Big Data Technologies" },
          { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Data Science" },
          { day: "Tuesday", time: "11:00 AM - 12:30 PM", course: "Data Analysis" },
          { day: "Wednesday", time: "9:00 AM - 10:30 AM", course: "Machine Learning" },
          { day: "Thursday", time: "11:00 AM - 12:30 PM", course: "Deep Learning" },
          { day: "Friday", time: "9:00 AM - 10:30 AM", course: "Big Data Technologies" },
        ]
      }
    ]
  }
];

