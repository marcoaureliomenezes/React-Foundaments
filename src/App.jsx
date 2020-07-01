import React from 'react'
import Aleatorio from './components/basics/Aleatorio'
import Header from './components/basics/Header'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import StudentList from './components/repetition/StudentList'
import TabelaProduto from './components/repetition/TabelaProduto'

import './App.css'
export default _ =>
        <div id="app">
            <Header></Header>
            <h1>Começando com React</h1>
            <div className="Cards">
                <Card titulo="Repetição Challenge"
                        color="#AEBCCA">
                    <TabelaProduto />
                </Card>
                <Card titulo="Repetição 1"
                        color="#FEB9AA">
                    <StudentList />
                </Card>
                <Card titulo="Família"
                        color="#00C8F8">
                    <Familia sobrenome="Reis Lima">
                        <FamiliaMembro nome="Marco"/>
                        <FamiliaMembro nome="Marcio"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Arthur"/>
                    </Familia>
                </Card>

                <Card titulo="Desafio Aleatório"
                        color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="Fragmento"
                        color="#E94C6F">
                    <Aleatorio min={1} max={60} />
                </Card>
                
                <Card titulo="Desafio Aleatório"
                color="#E8B71A">
                    <Aleatorio min={1} max={60} />
                </Card>
                
                <Card titulo="Fragmento"
                        color="#588C73">
                    <Aleatorio min={1} max={60} />
                </Card>
            </div>
            
        </div>