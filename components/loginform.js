/**
 * Created by tofael on 12/28/16.
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

export default({handleChange,handleSubmit})=> (

        <div {...styles.loginform}>
            <h4> Login</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" onChange={handleChange.bind(this, 'user_name')}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleChange.bind(this, 'password')}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>


    );
