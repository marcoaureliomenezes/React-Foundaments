import React from 'react'
import Aleatorio from './components/basics/Aleatorio'
import Header from './components/basics/Header'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import StudentList from './components/repetition/StudentList'
import TabelaProduto from './components/repetition/TabelaProduto'
import ParOuImpar from './components/conditional/even_odd'
import UsuarioInfo from './components/conditional/UsuarioInfo'
import DiretaPai from './components/comunication/DiretaPai'
import IndiretaPai from './components/comunication/IndiretaPai'
import Input from './components/formulario/Input'
import './App.css'

export default _ =>
        <div id="app">
            <Header></Header>
            <h1>Começando com React</h1>
            <div className="Cards">

                <Card titulo="12 - Componente controlado" color="#8BAD39">
                    <Input />             
                </Card>

                <Card titulo="11 - Comunicação Direta" color="#8BAD39">
                    <IndiretaPai />             
                </Card>

                <Card titulo="10 - Comunicação Direta" color="#59323C">
                    <DiretaPai usuario={{nome: 'Dadaia'}} />            
                </Card>

                <Card titulo="9 - Conditional rendering" color="#982395">
                    <UsuarioInfo usuario={{nome: 'Dadaia'}} />
                    <UsuarioInfo usuario={{email: 'dads@gmail.com'}} />
                </Card>

                <Card titulo="8 - Conditional rendering" color="#982395">
                    <ParOuImpar numero="87" />
                </Card>

                <Card titulo="7 - Repetição Challenge" color="#AEBCCA">
                    <TabelaProduto />
                </Card>

                <Card titulo="6 - Repetição 1" color="#FEB9AA">
                    <StudentList />
                </Card>

                <Card titulo="5 - Família" color="#00C8F8">
                    <Familia sobrenome="Reis Lima">
                        <FamiliaMembro nome="Marco"/>
                        <FamiliaMembro nome="Marcio"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Arthur"/>
                    </Familia>
                </Card>

                <Card titulo="4 - Random Challenge" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="3 - Fragments" color="#E94C6F">
                    <Aleatorio min={1} max={60} />
                </Card>
                
                <Card titulo="2 - Desafio Aleatório"
                color="#E8B71A">
                    <Aleatorio min={1} max={60} />
                </Card>
                
                <Card titulo="#1 Fragmento" color="#588C73">
                    <Aleatorio min={1} max={60} />
                </Card>
            </div>
            
        </div>