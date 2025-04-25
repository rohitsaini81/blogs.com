export default function AboutPage() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6">About TechInve</h1>
  
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          At <strong>TechInve</strong>, we’re building the most comprehensive platform to explore, organize, and stay updated on modern technologies. 
          Whether you're a developer, founder, or just a curious learner, we help you track and understand the evolving world of tech — from frameworks and tools to trends and best practices.
        </p>
  
        <div className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
          “Technology is best when it brings people together.” — Matt Mullenweg
        </div>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4">What We Do</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Track emerging tools and frameworks in web, AI, and mobile</li>
          <li>Create educational content for devs & tech enthusiasts</li>
          <li>Develop innovative games, apps, websites, and landing pages</li>
          <li>Provide custom digital products to clients, from websites to mobile apps</li>
          <li>Publish insights from real-world product teams</li>
          <li>Foster a community of curious builders</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2025 by a group of passionate engineers and designers, TechInve started as a weekend project to keep track of fast-moving JavaScript tools.
          Since then, it has grown into a full-fledged platform empowering thousands of users to stay sharp, share knowledge, and build better software.
        </p>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4">Team & Contributors</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          TechInve is made by a global team of open-source contributors, tech bloggers, and product thinkers. We believe in open knowledge, thoughtful design, and making tech more human.
        </p>
  
        <p className="text-gray-500 text-sm mt-12">
          Want to collaborate, contribute, or just say hi? Reach us at <a href="mailto:hello@techinve.com" className="text-blue-600 hover:underline">hello@techinve.com</a>.
        </p>
      </div>
    );
  }
  