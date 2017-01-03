/**
 * Created by tofael on 12/28/16.
 */

import { style } from 'glamor'

const styles = {
    signupform :style(
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
        <div {...styles.signupform}>
            <h4> Registration</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange.bind(this, 'name')} />
                </label>
                <label>
                    Username:
                    <input type="text" name="username" onChange={handleChange.bind(this, 'user_name')}/>
                </label>
                <label>
                    Email:
                    <input type="text" name="email" onChange={handleChange.bind(this, 'email')}/>
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" onChange={handleChange.bind(this, 'phone')}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleChange.bind(this, 'password')}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
         </div>
);