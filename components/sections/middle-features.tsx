
import { CheckCircle2Icon as Check } from "lucide-react";

const Features = () => (
  <section className="bg-white pb-6">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto px-6 p-6 bg-white">
        <div className="mb-16 text-center">
          <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h4>
          <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
            We offer a complete solution
          </p>
        </div>
        <div className="flex flex-wrap my-12">
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">Drawings and Plans</div>
            </div>
            <p className="leading-loose text-gray-500">
            Create detailed architectural drawings and plans that include floor plans, elevations, sections, and site plans.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">Code Compliance</div>
            </div>
            <p className="leading-loose text-gray-500 ">
            Ensures that the designs and construction plans comply with all relevant laws and regulations, as well as local building codes, zoning regulations, and permit requirements.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">Project Management</div>
            </div>
            <p className="leading-loose text-gray-500">
            Coordinates with contractors, engineers, and other professionals to ensure the project progresses on schedule and within budget.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">Sustainability</div>
            </div>
            <p className="leading-loose text-gray-500">
            We incorporate eco-friendly features and materials into the design to reduce the environmental impact of the building and potentially lower long-term operating costs.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">Renderings and Visuals</div>
            </div>
            <p className="leading-loose text-gray-500">
            To aid in decision-making and communication, we create 3D renderings, virtual walkthroughs, and visual representations of the design to help clients better understand how the finished project will look and feel.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" />
              <div className="ml-4 text-xl">Feasibility Study</div>
            </div>
            <p className="leading-loose text-gray-500">
            We conduct feasibility studies to assess whether a proposed project is viable from a technical, financial, and regulatory standpoint. These studies help clients make informed decisions about whether to proceed with a project.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;