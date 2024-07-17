import Image from "next/image"

export default () => (
    <section
        className="
            absolute -z-10 top-0 left-1/2 -translate-x-1/2
            md:translate-x-0 md:right-0 md:left-auto
            lg:max-w-[1100px]
        "
    >
        <picture>
            <source
                media="(min-width: 768px)"
                srcSet="/images/image-profile-tablet.webp"
            />
            <source
                media="(min-width: 1024px)"
                srcSet="/images/image-profile-desktop.webp"
            />
            <Image
                className="md:h-[600px] md:w-[322px]
                    

                "
                src="/images/image-profile-mobile.webp"
                height={380}
                width={170}
                alt=""
            />
        </picture>
    </section>
)