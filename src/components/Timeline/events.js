import {
  MdSchool as SchoolIcon,
  MdWork as WorkIcon
} from 'react-icons/md';
import {
  FaChalkboardTeacher as ProjectIcon
} from 'react-icons/fa'

const eventTypes = {
  SCHOOL: 'school',
  WORK: 'work',
  COURSE: 'course',
  PROJECT: 'course'
};

const locations = {
  PITTSBURGH: 'Pittsburgh, PA',
  COLORADO: 'Fort Collins, CO',
};

const tags = {
  ARCHITECTURE: 'Architecture',
  ENGINEERING: 'Engineering',
  FRONT_END: 'Front End',
  BACK_END: 'Back End',
  USER_EXPERIENCE: 'User Experience',
  DESIGN: 'Visual Design',
  LEADERSHIP: 'Team Leading'
};

const iconMap = {
  [eventTypes.SCHOOL]: SchoolIcon,
  [eventTypes.WORK]: WorkIcon,
  [eventTypes.PROJECT]: ProjectIcon,
};

export default [
  {
    type: eventTypes.WORK,
    date: '2020 - Present',
    title: 'Front End Software Engineer V',
    subtitle: 'Hewlett Packard Enterprise',
    location: locations.COLORADO,
    tags: [tags.FRONT_END, tags.ARCHITECTURE, tags.USER_EXPERIENCE, tags.LEADERSHIP],
    icon: iconMap[eventTypes.WORK]
  },
  {
    type: eventTypes.WORK,
    date: '2020',
    title: 'Front End Software Engineer II',
    subtitle: 'Hewlett Packard Enterprise',
    location: locations.COLORADO,
    tags: [tags.FRONT_END, tags.USER_EXPERIENCE, tags.DESIGN, tags.LEADERSHIP],
    icon: iconMap[eventTypes.WORK]
  },
  {
    type: eventTypes.WORK,
    date: '2018 - 2020',
    title: 'Front End Software Engineer I',
    subtitle: 'Hewlett Packard Enterprise',
    location: locations.COLORADO,
    tags: [tags.FRONT_END, tags.BACK_END, tags.USER_EXPERIENCE, tags.LEADERSHIP],
    icon: iconMap[eventTypes.WORK]
  },
  {
    type: eventTypes.SCHOOL,
    date: '2015 - 2018',
    title: 'Bachelors of Science in Computer Engineering',
    subtitle: 'University of Pittsburgh',
    location: locations.PITTSBURGH,
    tags: [tags.ENGINEERING, tags.LEADERSHIP],
    icon: iconMap[eventTypes.SCHOOL]
  },
  {
    type: eventTypes.WORK,
    date: '2017 - 2018',
    title: 'User Interface Intern',
    subtitle: 'Hewlett Packard Enterprise',
    location: locations.COLORADO,
    tags: [tags.FRONT_END, tags.BACK_END, tags.USER_EXPERIENCE, tags.DESIGN],
    icon: iconMap[eventTypes.WORK]
  },
  {
    type: eventTypes.WORK,
    date: '2015 - 2017',
    title: 'Full Stack Web Developer',
    subtitle: 'Plazek Properties',
    location: locations.PITTSBURGH,
    tags: [tags.FRONT_END, tags.BACK_END, tags.USER_EXPERIENCE, tags.DESIGN],
    icon: iconMap[eventTypes.WORK]
  },
  {
    type: eventTypes.SCHOOL,
    date: '2014 - 2015',
    title: 'Associates Degree in Engineering',
    subtitle: 'CCAC',
    location: locations.PITTSBURGH,
    tags: [tags.ENGINEERING],
    icon: iconMap[eventTypes.SCHOOL]
  },
]