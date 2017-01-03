/**
 * Created by tofael on 12/29/16.
 */

import Link from 'next/link'
import { style } from 'glamor'
import Head from 'next/head'

const styles = {
    header :style(
        {
            textAlign: 'center',
            color:'#4183C4',
            '& a':{
                marginRight:'10px'
            }
        }
    )

}

export default () => (
    <div {...styles.header}>
        <Head>
            <title>next react</title>
        </Head>
        <Link href='/' >
            <a>Send Request</a>
        </Link>

        <Link href='/registration'>
            <a>Registration</a>
        </Link>

        <Link href='/login'>
            <a>Login</a>
        </Link>
    </div>
)