import { MdSchool as SchoolIcon, MdWork as WorkIcon } from "react-icons/md";
import { FaChalkboardTeacher as ProjectIcon } from "react-icons/fa";

const eventTypes = {
  SCHOOL: "school",
  WORK: "work",
  COURSE: "course",
  PROJECT: "course",
};

const colorTypes = {
  HPE_GREEN: "#1ab288",
  UBER_BLACK: "#000000",
  PITT_BLUE: "#004e9c",
  CCAC_RED: "#b82e36",
  PLAZEK_BLUE: "#016896",
};

const locations = {
  PITTSBURGH: "Pittsburgh, PA",
  FOCO: "Fort Collins, CO",
  BOULDER: "Boulder, CO",
};

const tags = {
  ARCHITECTURE: "Architecture",
  ENGINEERING: "Engineering",
  FRONT_END: "Front End",
  BACK_END: "Back End",
  USER_EXPERIENCE: "User Experience",
  DESIGN: "Visual Design",
  LEADERSHIP: "Team Leading",
  PRODUCT: "Product",
};

const iconMap = {
  [eventTypes.SCHOOL]: SchoolIcon,
  [eventTypes.WORK]: WorkIcon,
  [eventTypes.PROJECT]: ProjectIcon,
};

export default [
  {
    type: eventTypes.WORK,
    date: "2022 - Present",
    title: "Front End Software Engineer",
    subtitle: "Uber",
    location: locations.BOULDER,
    tags: [tags.FRONT_END, tags.ENGINEERING, tags.DESIGN, tags.PRODUCT],
    icon: iconMap[eventTypes.WORK],
    color: colorTypes.UBER_BLACK,
  },
  {
    type: eventTypes.WORK,
    date: "2021 - 2022",
    title: "Technical Lead",
    subtitle: "Hewlett Packard Enterprise",
    location: locations.FOCO,
    tags: [
      tags.FRONT_END,
      tags.ARCHITECTURE,
      tags.ENGINEERING,
      tags.LEADERSHIP,
    ],
    icon: iconMap[eventTypes.WORK],
    color: colorTypes.HPE_GREEN,
  },
  {
    type: eventTypes.WORK,
    date: "2020 - 2021",
    title: "Senior Front End Engineer",
    subtitle: "Hewlett Packard Enterprise",
    location: locations.FOCO,
    tags: [
      tags.FRONT_END,
      tags.ARCHITECTURE,
      tags.USER_EXPERIENCE,
      tags.LEADERSHIP,
    ],
    icon: iconMap[eventTypes.WORK],
    color: colorTypes.HPE_GREEN,
  },
  {
    type: eventTypes.WORK,
    date: "2020",
    title: "Front End Software Engineer II",
    subtitle: "Hewlett Packard Enterprise",
    location: locations.FOCO,
    tags: [tags.FRONT_END, tags.USER_EXPERIENCE, tags.DESIGN],
    icon: iconMap[eventTypes.WORK],
    color: colorTypes.HPE_GREEN,
  },
  {
    type: eventTypes.WORK,
    date: "2018 - 2020",
    title: "Front End Software Engineer I",
    subtitle: "Hewlett Packard Enterprise",
    location: locations.FOCO,
    tags: [tags.FRONT_END, tags.BACK_END, tags.USER_EXPERIENCE],
    icon: iconMap[eventTypes.WORK],
    color: colorTypes.HPE_GREEN,
  },
  {
    type: eventTypes.SCHOOL,
    date: "2015 - 2018",
    title: "Bachelors of Science in Computer Engineering",
    subtitle: "University of Pittsburgh",
    location: locations.PITTSBURGH,
    tags: [tags.ENGINEERING, tags.LEADERSHIP],
    icon: iconMap[eventTypes.SCHOOL],
    color: colorTypes.PITT_BLUE,
  },
  {
    type: eventTypes.WORK,
    date: "2017 - 2018",
    title: "User Interface Intern",
    subtitle: "Hewlett Packard Enterprise",
    location: locations.FOCO,
    tags: [tags.FRONT_END, tags.BACK_END, tags.USER_EXPERIENCE, tags.DESIGN],
    icon: iconMap[eventTypes.WORK],
    color: colorTypes.HPE_GREEN,
  },
  {
    type: eventTypes.WORK,
    date: "2015 - 2017",
    title: "Full Stack Web Developer",
    subtitle: "Plazek Properties",
    location: locations.PITTSBURGH,
    tags: [tags.FRONT_END, tags.BACK_END, tags.USER_EXPERIENCE, tags.DESIGN],
    icon: iconMap[eventTypes.WORK],
    color: colorTypes.PLAZEK_BLUE,
  },
  {
    type: eventTypes.SCHOOL,
    date: "2014 - 2015",
    title: "Associates Degree in Engineering",
    subtitle: "CCAC",
    location: locations.PITTSBURGH,
    tags: [tags.ENGINEERING],
    icon: iconMap[eventTypes.SCHOOL],
    color: colorTypes.CCAC_RED,
  },
];
