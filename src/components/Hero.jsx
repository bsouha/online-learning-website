import styles from "../style";
import { books } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-Black ss:leading-[100.8px] leading-[75px]">
            Welcome to <br className="sm:block hidden" />{" "}
            <span className="text-gradient">LearnDZ</span>{" "}
          </h1>
          
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Dans notre plateform vous pouver consilter des annonces de soutien scolaire 
          publier des autre et aussi trouver touts les reponces pour vos questions
          aller c'est parti.
        </p>
      </div>
    
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={books} className="w-[100%] h-[100%] relative z-[5]" />

       
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      
      </div>
      
    </section>
  );
};

export default Hero;
