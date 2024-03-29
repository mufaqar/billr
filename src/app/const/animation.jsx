export const fadeUp = {
    offscreen: {
        y: 100,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.8,
            ease: "easeInOut"
        }
    }
};

export const fadeRight = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  export const fadeLeft = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };