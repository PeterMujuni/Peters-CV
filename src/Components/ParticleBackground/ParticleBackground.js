import Particles from 'react-tsparticles';

export const ParticleBackground = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
      const particlesLoaded = (container) => {
        console.log(container);
      };
      
      return  (    
        <Particles
        id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
            background: {
                color: {
                value: "#082940",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
                },
                modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 10,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 1.2,
                },
                connect: {
                    distance: 100,
                    radius: 60,
                    lineLinked: {
                        opacity: 1,
                    },
                },
                remove: {
                    quantity: 4,
                },
                grab: {
                    distance: 100,
                    lineLinked: {
                        opacity: 1,
                    },
                },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 200,
                    enable: false,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 0.1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                },
                value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "star",
                },
                size: {
                    random: true,
                    value: 5,
                },
            },
            detectRetina: false,
            }}
        />       
    )  
}