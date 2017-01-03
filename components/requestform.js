/**
 * Created by tofael on 12/30/16.
 */

import { style } from 'glamor'

const styles = {
    loginform :style(
        {
            textAlign: 'center',
            '& label':{
                display:'block'
            },
            '& input':{
                margin:'5px'
            },
            '& form':{
                padding:'10px',
                background: '#eee'
            },
        }
    ),

}

export default ({handleChange,handleSubmit})=> (
    <div {...styles.loginform}>
            <h4> Send Request</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Phone:
                    <input type="text" name="phone" onChange={handleChange.bind(this, 'phone')}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>


);