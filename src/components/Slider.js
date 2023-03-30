import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <div className='slider-container'  style={{width:"90%", margin: "0 auto" }}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Carousel >
        <Carousel.Item className='carousel-item'>
          <img
            className="d-block w-100"
            src="https://www.rockmywedding.co.uk/1800x1800/wp-content/uploads/sites/1/nggallery/hannah-stuart-2/NICK-WALKER-PHOTOGRAPHY-HANNAH-STUART-10.jpg?fit=1"
            alt="First slide"
           
          />
          <Carousel.Caption className="carousel-caption" >
            <p style={{ color: 'Black', fontSize: "3rem" }}>Each event is special in its own way.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'  >
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/khan-makk-procession-thai-traditional-ceremony-engagement_41969-9269.jpg?size=626&ext=jpg&ga=GA1.2.239787390.1679835303&semt=ais"
            alt="Second slide"
          
          />
          <Carousel.Caption className="carousel-caption" >
            <p style={{ color: 'black', fontSize: "3rem" }}>Creating the perfect and best day ever.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/rich-dinner-table-served-pink-golden-tones_8353-662.jpg?size=626&ext=jpg&ga=GA1.1.239787390.1679835303&semt=ais"
            alt="Third slide"
           
          />
          <Carousel.Caption className="carousel-caption" >
          </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/beautiful-arrangement-with-cages-hanging_1157-336.jpg?size=626&ext=jpg&ga=GA1.1.239787390.1679835303&semt=ais"
          alt="forth slide"
         
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
export default Slider;