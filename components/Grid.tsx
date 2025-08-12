import React from 'react'
import { MdDescription } from 'react-icons/md'
import { BentoGrid } from './ui/BentoGrid'
import { gridItems } from '@/data'
import {BentoGridItem} from '@/components/ui/BentoGrid'
import { GlowingEffect } from './ui/glowing-effect'

 
const Grid = () => {
  return (
    <section id="about">
        
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName,
              spareImg}) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                    >
                        <div className="absolute inset-0">
                            <GlowingEffect
                                spread={60}
                                glow={true}
                                disabled={false}
                                proximity={80}
                                inactiveZone={0.3}
                                blur={8}
                                variant="white"
                                movementDuration={1.5}
                                borderWidth={0.5}
                            />
                        </div>
                    </BentoGridItem>
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid