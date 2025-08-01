"use client"

import { FileText, CheckCircle, AlertTriangle, BarChart3 } from "lucide-react"

export default function Templates() {
  const templates = [
    {
      id: 1,
      title: "Test Plan Template",
      description: "Template for creating comprehensive test plans and strategies.",
      icon: FileText,
      link: "/templates/Template_Test_Plan.pdf",
    },
    {
      id: 2,
      title: "Requirements Traceability Matrix",
      description: "Template for tracking requirements and test coverage.",
      icon: BarChart3,
      link: "/templates/Template_RTM.pdf",
    },
  ]

  return (
    <div className="p-50 min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">QA Document Templates</h1>
        <p className="text-gray-600 text-lg">Collection of QA document templates to streamline your testing process.</p>
      </div>

      {/* Templates Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => {
          const IconComponent = template.icon
          return (
            <div key={template.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-center gap-3 mb-4">
                <IconComponent className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">{template.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{template.description}</p>
              <button className="w-full bg-[#F97316] hover:cursor-pointer text-white font-medium py-2 px-4 rounded-md transition-colors" onClick={() => window.open(template.link, '_blank')}>
                Download Template
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
