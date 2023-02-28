export function ContactForm() {
    return (

        <section id="htmlForm">
            <form>
                <fieldset>

                    <legend>Contact Form</legend>

                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" required/>
                    <br />

                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required/>
                    <br />

                    <label htmlFor="subject">Subject: </label>
                    <select id="subject" name="subject" required>
                        <option value="">- Please select -</option>
                        <option value="bug">Bug</option>
                        <option value="feedback">Feedback</option>
                        <option value="inquiry">Inquiry</option>
                        <option value="requestFeature">Request Feature</option>
                    </select>
                    <br />
                    
                    <label htmlFor="body">Description:</label>
                    <textarea id="body" name="body" rows={8} cols={50} ></textarea>
                    <br />

                    <label htmlFor="responseRequested">Would you like to hear back from me?</label>
                    <input type="checkbox" id="responseRequested" name="responseRequested" />
                    <br />
                    <br />                         
                    
                    <input type="submit" value="Send!" />
                    <input type="reset" value="Reset htmlForm" />

                </fieldset>

                <p><b>NOTE:</b> Still under construction - htmlForm is not currently suubmitting to my email!</p>
            </form>

        </section>

    );
}
        
export default ContactForm;