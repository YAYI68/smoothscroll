import React from 'react'
import { useInView } from 'react-intersection-observer';

export const ContentDisplay = () => {
    const { ref, inView, entry } = useInView({
        threshold:0.8,
    });
    console.log(entry)

  return (
    <div>
        <section style={{backgroundColor:"red",color:"white",height:"30vh"}}>
            <h1 >Section 1</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur vitae odit voluptatem natus illum minus error sint dolor sed, voluptatum ad officia quis inventore ipsa tempora facere reprehenderit.
            Provident tempora inventore iste veniam atque explicabo nulla accusamus repudiandae? Explicabo, nulla eveniet! Explicabo deserunt quaerat ducimus. Aspernatur, magni odit, aliquid modi assumenda, esse velit quidem reiciendis odio similique atque!
            Officiis illo accusantium, earum dolorum sit dolor quo officia cumque laboriosam iure aliquid incidunt repellat eligendi saepe totam sed quam consectetur eos asperiores eius dolores nihil quis. Et, velit sapiente.
            </p>    
        </section>
        <section style={{backgroundColor:"blue",color:"white",height:"30vh"}}>
            <h1 >Section 2</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur vitae odit voluptatem natus illum minus error sint dolor sed, voluptatum ad officia quis inventore ipsa tempora facere reprehenderit.
            Provident tempora inventore iste veniam atque explicabo nulla accusamus repudiandae? Explicabo, nulla eveniet! Explicabo deserunt quaerat ducimus. Aspernatur, magni odit, aliquid modi assumenda, esse velit quidem reiciendis odio similique atque!
            Officiis illo accusantium, earum dolorum sit dolor quo officia cumque laboriosam iure aliquid incidunt repellat eligendi saepe totam sed quam consectetur eos asperiores eius dolores nihil quis. Et, velit sapiente.
            </p>    
        </section>
        <section style={{backgroundColor:"green",color:"white",height:"30vh"}}>
            <h1 >Section 3</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur vitae odit voluptatem natus illum minus error sint dolor sed, voluptatum ad officia quis inventore ipsa tempora facere reprehenderit.
            Provident tempora inventore iste veniam atque explicabo nulla accusamus repudiandae? Explicabo, nulla eveniet! Explicabo deserunt quaerat ducimus. Aspernatur, magni odit, aliquid modi assumenda, esse velit quidem reiciendis odio similique atque!
            Officiis illo accusantium, earum dolorum sit dolor quo officia cumque laboriosam iure aliquid incidunt repellat eligendi saepe totam sed quam consectetur eos asperiores eius dolores nihil quis. Et, velit sapiente.
            </p>    
        </section>
        <section style={{backgroundColor:"black",color:"white",height:"30vh"}}>
            <h1 >Section 1</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur vitae odit voluptatem natus illum minus error sint dolor sed, voluptatum ad officia quis inventore ipsa tempora facere reprehenderit.
            Provident tempora inventore iste veniam atque explicabo nulla accusamus repudiandae? Explicabo, nulla eveniet! Explicabo deserunt quaerat ducimus. Aspernatur, magni odit, aliquid modi assumenda, esse velit quidem reiciendis odio similique atque!
            Officiis illo accusantium, earum dolorum sit dolor quo officia cumque laboriosam iure aliquid incidunt repellat eligendi saepe totam sed quam consectetur eos asperiores eius dolores nihil quis. Et, velit sapiente.
            </p>    
        </section>
        <section style={{backgroundColor:"purple",color:"white",height:"30vh"}} ref={ref}>
            <h1 style={inView?{color:"yellow"}:{}} >Section 1</h1>
            <p style={inView?{color:"blue"}:{}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur vitae odit voluptatem natus illum minus error sint dolor sed, voluptatum ad officia quis inventore ipsa tempora facere reprehenderit.
            Provident tempora inventore iste veniam atque explicabo nulla accusamus repudiandae? Explicabo, nulla eveniet! Explicabo deserunt quaerat ducimus. Aspernatur, magni odit, aliquid modi assumenda, esse velit quidem reiciendis odio similique atque!
            Officiis illo accusantium, earum dolorum sit dolor quo officia cumque laboriosam iure aliquid incidunt repellat eligendi saepe totam sed quam consectetur eos asperiores eius dolores nihil quis. Et, velit sapiente.
            </p>    
        </section>
        <section style={{backgroundColor:"pink",color:"white",height:"30vh"}} >
            <h1 >Section 1</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate tenetur vitae odit voluptatem natus illum minus error sint dolor sed, voluptatum ad officia quis inventore ipsa tempora facere reprehenderit.
            Provident tempora inventore iste veniam atque explicabo nulla accusamus repudiandae? Explicabo, nulla eveniet! Explicabo deserunt quaerat ducimus. Aspernatur, magni odit, aliquid modi assumenda, esse velit quidem reiciendis odio similique atque!
            Officiis illo accusantium, earum dolorum sit dolor quo officia cumque laboriosam iure aliquid incidunt repellat eligendi saepe totam sed quam consectetur eos asperiores eius dolores nihil quis. Et, velit sapiente.
            </p>    
        </section>
        
    </div>
  )
}
