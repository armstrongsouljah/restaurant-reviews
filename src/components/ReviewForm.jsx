import React from 'react';
const ReviewForm = (props) => {
   return (
       <div class="col col-6 card">
           <h4>Send Your Review Below:</h4>
            <form>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Full Name:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div> 
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="gap-2 d-md-block">
                <button type="submit" className="btn btn-primary">Button</button>
                </div>
            </form>
       </div>
   )
};
export default ReviewForm;
