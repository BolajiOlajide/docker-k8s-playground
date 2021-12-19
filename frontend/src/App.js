import "./App.css";
import imageDaniel from './images/image-daniel.jpg';
import imageJeanette from './images/image-jeanette.jpg';
import imageJonathan from './images/image-jonathan.jpg';
import imageKira from './images/image-kira.jpg';
import imagePatrick from './images/image-patrick.jpg';

function App() {
  return (
    <div>
      <main className="testimonial-grid">
        <article className="testimonial grid-col-span-2 flow bg-primary-400 quote text-neutral-100">
          <div className="flex">
            <div>
              <img src={imageDaniel} alt="daniel clifford" />
            </div>
            <div>
              <h2 className="name">Daniel Clifford</h2>
              <p className="position">Verified Graduate</p>
            </div>
          </div>
          <p>
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </p>
          <p>
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </article>
        <article className="testimonial flow bg-secondary-400 text-neutral-100">
          <div className="flex">
            <div>
              <img src={imageJonathan} alt="Jonathan Walters" />
            </div>
            <div>
              <h2 className="name">Jonathan Walters</h2>
              <p className="position">Verified Graduate</p>
            </div>
          </div>
          <p>The team was very supportive and kept me motivated</p>
          <p>
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </article>
        <article className="testimonial flow bg-neutral-100 text-secondary-400">
          <div className="flex">
            <div>
              <img src={imageJeanette} alt="Jeanette Harmon" />
            </div>
            <div>
              <h2 className="name">Jeanette Harmon</h2>
              <p className="position">Verified Graduate</p>
            </div>
          </div>
          <p>An overall wonderful and rewarding experience</p>
          <p>
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </article>
        <article className="testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100">
          <div className="flex">
            <div>
              <img
                className="border-primary-400"
                src={imagePatrick}
                alt="Patrick Abrams"
              />
            </div>
            <div>
              <h2 className="name">Patrick Abrams</h2>
              <p className="position">Verified Graduate</p>
            </div>
          </div>
          <p>
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>
          <p>
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </article>
        <article className="testimonial flow bg-neutral-100 text-secondary-400">
          <div className="flex">
            <div>
              <img src={imageKira} alt="Kira Whittle" />
            </div>
            <div>
              <h2 className="name">Kira Whittle</h2>
              <p className="position">Verified Graduate</p>
            </div>
          </div>
          <p>Such a life-changing experience. Highly recommended!</p>
          <p>
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </article>
      </main>

      <p className="credit">
        Copied from{" "}
        <a href="https://github.com/kevin-powell/learn-grid-the-easy-way">
          Kevin Powell's Github
        </a>
      </p>
    </div>
  );
}

export default App;
