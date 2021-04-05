
import { useInView } from 'react-intersection-observer';
import { useEffect} from 'react'
import { Spinner } from 'react-bootstrap'
const Moredata = ({ onAdd }) => {
  const [ref, inView,] = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() => {
    const checkButton = (bottom) => {
      const scrollPlace = Math.ceil(window.pageYOffset + document.documentElement.clientHeight)
      if (scrollPlace >= document.body.offsetHeight - 100 && bottom &&window.pageYOffset !==0) {
        window.scrollTo(0, scrollPlace - 120)
        onAdd()
      }
    }
    checkButton(inView)
    
  }, [inView])

  return (
    <div ref={ref}>
      <span  className="horizontal-center">
        <Spinner className="mr-2" animation='border' variant='secondary' size='sm' />
        <label>Loading...</label>
      </span>
    </div>
  )
}

export default Moredata
