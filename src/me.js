import image from "assets/images/landing-page.jpg";
import neoUiImage from "assets/images/neo-ui.png";

const Profile = {
  name: {
    normal: "Brian Kipkirui Bett",
    caps: "BRIAN KIPKIRUI BETT"
  },
  whoAmI: [
    "Software Engineer.",
    "Coder.",
    "Music Enthusiast.",
    "Athlete.",
  ],
  projects: [
    {
      id: 1,
      title: "Neo UI",
      image: neoUiImage,
      description:
        "This is a collection of React UI components personally developed. The documentation is maintained using the storybook documentation library.",
      url: "https://neo-ui-react.netlify.com"
    }
  ],
  socials: {
    twitter: {
      icon: "twitter",
      url: "https://twitter.com/thebest_bett",
      title: "Twitter",
      image,
      handle: "thebest_bett"
    },
    facebook: {
      icon: "facebook",
      url: "https://www.facebook.com/bett.blake.bryan",
      title: "Facebook",
      image,
      handle: "bett.blake.bryan"
    },
    github: {
      icon: "github",
      url: "https://github.com/bettblake08",
      title: "GitHub",
      image,
      handle: "bettblake08"
    },
    linkedin: {
      icon: "linkedin",
      url: "https://linkedin.com/in/bettbrian08",
      title: "LinkedIn",
      image,
      handle: "bettbrian08"
    }
  },
  education: {
    bachelors: {
      name: "Jiangsu University",
      year: 2017,
      major: "Computer Science And Technology",
      level: "Bachelor's Degree Graduate",
      homepage: "http://oec.ujs.edu.cn/"
    }
  }
};

export default Profile;
