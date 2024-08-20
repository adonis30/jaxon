import { projects } from '@/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import { PinContainer } from './ui/Pin'

const RecentProjects = () => {
  return (
    <section id="projects" className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          A small selection of <span className="text-purple-600">recent projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div key={item.id} className="flex justify-center mt-10 mb-32">
              <PinContainer title={item.title} href={item.link}>
                <div className="bg-transparent rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="relative h-48 md:h-56 lg:h-64">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 truncate">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.des}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {item.iconLists.map((icon, index) => (
                          <img
                            key={index}
                            src={icon}
                            alt={`Technology ${index + 1}`}
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                        ))}
                      </div>
                      <a
                        href={item.link}
                        className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                      >
                        <span className="text-sm font-medium mr-2">View Project</span>
                        <FaLocationArrow size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentProjects