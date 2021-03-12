import React from 'react'
import styles from './index.module.css'



const inputFields = {
    InputElements(name, type, placeholder, text, f, req) {

        return (
            <div className={ styles.inputWrapper }>
                <label className={ styles.inputLabel } htmlFor={ name }>{ text }</label>
                {req ? <input className={ styles.input } placeholder={ placeholder } type={ type } name={ name } id={ name } onChange={ f } required />
                    : <input className={ styles.input } placeholder={ placeholder } type={ type } name={ name } id={ name } onChange={ f } /> }
            </div>
        )
    }, ButtonsField(className, type, id, name, text, f, req) {

        return (
            <div className={ className }>
                {req ? <input className={ styles.inputTick } required type={ type } name={ name } id={ id } onChange={ f } />
                    : <input className={ styles.inputTick } type={ type } name={ name } id={ id } onChange={ f } /> }
                <label className={ styles.Label } htmlFor={ id }>{ text }</label>

            </div>

        )
    },

}
export default inputFields