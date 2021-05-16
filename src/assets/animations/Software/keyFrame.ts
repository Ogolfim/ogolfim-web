const opacity = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

const codeAnimate = {
  inicial: {
    opacity: 0
  },
  animate: (i: number) => {
    const opacityCreated = opacity.map((_, index) => {
      if(index >= i) return 1;
      return 0;
    })
    return {
      opacity: opacityCreated,
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  }
}


export default codeAnimate