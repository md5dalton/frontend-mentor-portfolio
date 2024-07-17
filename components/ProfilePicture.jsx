import Image from "next/image"

export default () => (
    <section
        className="
            absolute -z-10 top-0 w-full
            flex justify-center md:justify-end
        "
    >
        <div className="max-w-[1100px] lg:w-full lg:mx-auto lg:px-8 lg:grid lg:justify-end">
            <picture>
                <source
                    media="(min-width: 768px)"
                    srcSet="/images/profile-tablet.png"
                />
                <source
                    media="(min-width: 1024px)"
                    srcSet="/images/profile-desktop.png"
                />
                <Image
                    className="md:h-[600px] md:w-[322px]"
                    src="/images/profile-mobile.png"
                    height={380}
                    width={170}
                    alt=""
                />
            </picture>
        </div>
    </section>
)