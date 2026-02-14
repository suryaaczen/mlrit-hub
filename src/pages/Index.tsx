import { Mail, Share2, ExternalLink, GraduationCap, BarChart3, BookOpen } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import { toast } from "sonner";

const links = [
  {
    title: "Shiksha Reviews",
    url: "https://www.shiksha.com/college/mlr-institute-of-technology-jeedimetla-hyderabad-25370?isource=csearch&rf=searchWidget",
    icon: GraduationCap,
    color: "hsl(210, 80%, 55%)",
  },
  {
    title: "Careers360 Reviews",
    url: "https://www.careers360.com/colleges/mlr-institute-of-technology-dundigal",
    icon: BarChart3,
    color: "hsl(170, 60%, 45%)",
  },
  {
    title: "Collegedunia Reviews",
    url: "https://collegedunia.com/college/58194-mlr-institute-of-technology-mlid-hyderabad",
    icon: BookOpen,
    color: "hsl(30, 80%, 55%)",
  },
];

const Index = () => {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: "MLRIT Review Centre", url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="glass-card w-full max-w-md rounded-3xl overflow-hidden animate-fade-in">
        {/* Hero Image */}
        <div className="h-44 w-full overflow-hidden">
          <img
            src={heroCampus}
            alt="MLRIT Campus"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 pb-8 pt-5 flex flex-col items-center">
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight text-center">
            MLRIT Review Centre
          </h1>
          <p className="text-sm text-muted-foreground mt-1 text-center">
            All Official Reviews & Ratings in One Place
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4 animate-fade-in animate-stagger-1" style={{ animationFillMode: "both" }}>
            <a
              href="mailto:info@mlrinstitutions.ac.in"
              aria-label="Contact MLRIT via email"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-medium hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Mail className="w-3.5 h-3.5" /> Contact
            </a>
            <button
              onClick={handleShare}
              aria-label="Share MLRIT Review Centre link"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-medium hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>

          {/* Links */}
          <div className="w-full mt-6 flex flex-col gap-3">
            {links.map((link, i) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${link.title} in a new tab`}
                className={`link-button flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-card text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-fade-in animate-stagger-${i + 2}`}
                style={{ animationFillMode: "both" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: link.color + "18", color: link.color }}
                >
                  <link.icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm flex-1">{link.title}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
