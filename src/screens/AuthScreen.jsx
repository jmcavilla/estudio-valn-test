import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { useState } from 'react'
import { Form, Image } from 'react-bootstrap';

const AuthScreen = () => {

    const [loading, setLoading] = useState(false)
    const [buttonText, setButtonText] = useState("Continuar")

    const handleLogin = () => {
        setLoading(true);
        setButtonText("")

        setTimeout(() => {
            setLoading(false)
            setButtonText("Continuar")
        }, 4000);
    }

    return (
        <div className="auth__container">
            <div className="auth__box">
                <div className="auth__input-container">
                    <Image className="auth__logo" src={`${process.env.PUBLIC_URL}/assets/images/estudio_valn_logo.png`}></Image>
                    {/* <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Usuario" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Contraseña"></Form.Control>
                        </Form.Group>
                        <Button variant="primary" className="auth__button">Aceptar</Button>
                    </Form> */}
                    <Input placeholder="Usuario" />
                    <Input.Password
                        placeholder="Contraseña"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <Button block loading={loading} type={"default"} onClick={handleLogin}>{ buttonText }</Button>
                </div>
            </div>
        </div>
    )
}

export default AuthScreen
