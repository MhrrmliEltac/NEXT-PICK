import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { Typography } from "@mui/material";
import React from "react";

type BreadcrumbItemType = {
  label?: string | null;
  href?: string;
};

const CustomBreadcrumb = ({
  title,
  subtitle,
  breadcrumbs,
  minHeight = "min-h-[100px]",
}: {
  title?: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItemType[];
  minHeight?: string;
}) => {
  return (
    <div className={`relative ${minHeight}`}>
      <section
        className="z-0 absolute -top-24 w-full h-[302px] overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(227, 226, 226, 1) 0%,  rgba(227, 226, 226, 0) 100%)",
        }}
      >
        <div className="flex flex-col gap-4 h-full w-[80%] justify-center pt-14 max-lg:w-[90%] max-w-[1524px] mx-auto">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs &&
                breadcrumbs.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {item.href ? (
                        <BreadcrumbLink href={item.href}>
                          {item.label}
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="text-[#1A4DE1]">
                          {item.label}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
            </BreadcrumbList>
          </Breadcrumb>

          <Typography
            variant="h3"
            color={NEUTRAL_COLOR.neutral800}
            fontSize={32}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color={NEUTRAL_COLOR.neutral600}
            fontSize={16}
          >
            {subtitle}
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default CustomBreadcrumb;
