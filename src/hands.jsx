function sectionhands({ img, text }) {
  return (
    <section className="flex items-center justify-between gap-10 px-10 py-16">
      <div className="flex-1">
        <h2 className="text-4xl font-bold">
          Еда, которая сделает тебя лучше!
        </h2>

        <p className="mt-6 text-lg text-[#514642] w-[800px]">
          {text}
        </p>
      </div>

      <img src={img} alt="Food section illustration" className="w-[350px]" />
    </section>
  )
}

export default sectionhands