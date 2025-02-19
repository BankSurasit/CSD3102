export const lessons = [
  {
    id: "1",
    title: "กติกาฟุตบอล",
    icon: "futbol",
    image:
      "https://cms.dmpcdn.com/sportarticle/2016/05/31/155549e3-8f2e-48c2-8382-f1d9ea84632a.png", // Replace with the actual image URL
  },
  {
    id: "2",
    title: "เทคนิคพื้นฐาน",
    icon: "gamepad",
    image:
      "https://down-th.img.susercontent.com/file/th-11134207-7r98w-lo0yiqw3eqeoa8", // Replace with the actual image URL
  },
  {
    id: "3",
    title: "กลยุทธ์การเล่น",
    icon: "chess",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUakjg1CVj_xn9763INpEQlB-7igWxJNUhQ&s", // Replace with the actual image URL
  },
  {
    id: "4",
    title: "การเล่นในเเต่ละตำแหน่ง",
    icon: "chess-knight", 
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZGgSOH3a9kGf7o0x5TqyVsomADK_Eq6woKQ&s",
  },
  {
    id: "5",
    title: "นักเตะไอคอน",
    icon: "star",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXV1Uii9pbAwSo7do3jQ4y7g3k-g87MyFs3Q&s", // Replace with the actual image URL
  },
];

// Example JSX for rendering
const LessonItem = ({ lesson }) => (
  <div className="lesson">
    <h3>{lesson.title}</h3>
    <i className={`icon-${lesson.icon}`}></i>
    <img src={lesson.image} alt={lesson.title} />
  </div>
);

const LessonList = () => (
  <div>
    {lessons.map((lesson) => (
      <LessonItem key={lesson.id} lesson={lesson} />
    ))}
  </div>
);
