import FadeIn from "../FadeIn";
const certificates = [
{
title: "Power Learn Project (PLP)",
issuer: "Power Learn Project",
type: "pdf",
link: "/certificates/plp-certificate.pdf",
},

{
title: "Software Engineering Essentials",
issuer: "Coursera",
type: "link",
link: "https://www.credly.com/badges/5bb420a6-b975-4157-a602-b210945eb297/public_url",
},

{
title: "Introduction to Software Engineering",
issuer: "Coursera",
type: "link",
link: "https://coursera.org/share/c07207b70f6e80f64def8657e988a628",
},

{
title: "Future Certification",
issuer: "Mount Kenya University",
type: "coming",
link: "#",
},
];

export default function Certificates() {
return ( 
<FadeIn>
  <section
    id="certificates"
    className="py-24 px-6 transition-colors duration-300"
  > 
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
      Certificates & Achievements
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {certificates.map((cert, index) => (
        <div
          key={index}
          className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-2">
            {cert.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Issued by {cert.issuer}
          </p>

          {cert.type === "coming" ? (
            <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
              Coming Soon
            </span>
          ) : (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg inline-block"
            >
              View Certificate
            </a>
          )}
        </div>
      ))}

    </div>
  </div>
</section>
</FadeIn>
);
}